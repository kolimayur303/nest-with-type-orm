import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./todo.entity";
import { CreateTodos } from "./dtos/create-todo.dto"

@Injectable()
export class TodosService {

    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo> ) {}

    async create(dto: CreateTodos) {
        const todo = this.todoRepository.create(dto);
         return await this.todoRepository.save(todo)
    }

    findMany() {
        return this.todoRepository.find()
    }

    async update(id: number, dto: CreateTodos) {
        const todo = await this.todoRepository.findOne({ where: { id } });
        Object.assign(todo, dto);
        return await this.todoRepository.save(todo);
    }

    async delete(id: number) {
        const todo = await this.todoRepository.findOne({ where: { id } });
         return await this.todoRepository.remove(todo);
    }

    async findOne(id: number) {
        return await this.todoRepository.findOne({ where: { id } });
    }
}
