import {IsString} from 'class-validator';

export class RefreshTokenDto {
    @IsString({
        message: 'You did not pass Token or it`s not a string'
    })
    refreshToken: string
}