import { UseGuards, applyDecorators } from "@nestjs/common";
import { JwtAuthGuard } from "../guards/jwt.guards";
import { OnlyAdminGuard } from "../guards/admin.guards";
import { TypeRole } from "../auth.interface";

export const Auth = (role:TypeRole='user')=> applyDecorators(role === 'admin' ? UseGuards(JwtAuthGuard,OnlyAdminGuard) : UseGuards(JwtAuthGuard))