import { Controller, Get } from '@nestjs/common';
import { Roles } from 'hexabot/src/utils/decorators/roles.decorator'

@Controller('hello')
export class HelloController {

    @Roles('public')
    @Get()
    getHello(): string {
      return 'Hello World!';
    }
}
