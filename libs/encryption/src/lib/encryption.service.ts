import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class EncryptionService {
  salt = 10

  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.salt)
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash)
  }
}
