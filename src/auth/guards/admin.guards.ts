import {UserModel} from 'src/user/user.model'
import {CanActivate, ExecutionContext, ForbiddenException} from '@nestjs/common'
import {Reflector} from '@nestjs/core'

export class OnlyAdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(contex: ExecutionContext): boolean {
    const request = contex.switchToHttp().getRequest<{user: UserModel}>()
    const user = request.user

    if (!user.isAdmin) throw new ForbiddenException('You have no rights!')
    return user.isAdmin
  }
}
