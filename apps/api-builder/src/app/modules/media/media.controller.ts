import { Crud, CrudController } from '@nestjsx/crud'
import { Media } from './media.entity'
import { Controller, Headers, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MediaService } from './media.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { editFileName, imageFileFilter } from '@ionhour/backend-core'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '../auth/auth.service'
import { UsersService } from '../users/users.service'

@Crud({
  model: {
    type: Media
  },
  query: {
    join: {
      user: {
        eager: true,
        select: false
      }
    }
  }
})
@Controller('media')
@ApiTags('media')
export class MediaController implements CrudController<Media> {
  constructor(public service: MediaService, private authService: AuthService, private userService: UsersService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({ destination: './public/uploads', filename: editFileName }),
      fileFilter: imageFileFilter
    })
  )
  @UseGuards(AuthGuard('jwt'))
  async upload(@Headers('Authorization') authToken: string, @UploadedFile() image?: Express.Multer.File) {
    const token = authToken.split(' ')[1]
    const user = await this.authService.checkAuth(token)
    const profile = await this.userService.findOneByEmail(user.email)
    const media: any = new Media()
    media.fileName = `uploads/${image.filename}`
    media.user = { id: profile.id }
    return this.service.repo.save(media)
  }
}
