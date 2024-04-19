import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodos } from "./dtos/create-todo.dto";

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post()
    create (@Body() dto: CreateTodos) {
        return this.todosService.create(dto);
    }

    @Get()
    findMany() {
        return this.todosService.findMany();
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.todosService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateTodos) {
        return this.todosService.update(id, dto);
    }
    
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.todosService.delete(id);
    }
}