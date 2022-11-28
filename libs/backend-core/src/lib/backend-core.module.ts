import { Module } from '@nestjs/common'
import {APP_INTERCEPTOR} from "@nestjs/core";
import {ErrorsInterceptor} from "./interceptors";

@Module({
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
  exports: []
})
export class BackendCoreModule {}
