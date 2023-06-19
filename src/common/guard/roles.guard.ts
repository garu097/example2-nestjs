import { UserService } from './../../module/user/user.service';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role, ROLE } from "../constant/roles.constant";

@Injectable()
export class RolesGuard implements CanActivate  {
    constructor(private reflector: Reflector, private userService :UserService) {}

    canActivate(
        ctx: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const matchRequired = this.reflector.get<Role[]>(ROLE, ctx.getHandler())
        if(!matchRequired.length) return true

        const request = ctx.switchToHttp().getRequest();
        const userId = request.user?.userId;
        
        if(!userId) {
            console.log("invalid userid")
            return false
        }

        return this.userService.matchRoles(userId, matchRequired)
    }
}