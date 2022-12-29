import { Controller, Get , Post} from "@nestjs/common";

@Controller('user')
export class UserController{
    @Get() 
    getAllUser(){
        return [
            {
                name : 'vu',
                age : 23,
                address : 'hn'
            },
            {
                name : 'hung',
                age : 23,
                address : 'hn'
            }
        ]
    }

    @Post()
    createUser(){
        return {
            name : 'nam',
            age : 22,
            address: 'hn'
        }
    }
};