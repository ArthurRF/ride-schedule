import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUserUseCase = new CreateUserUseCase();

    await createUserUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).send();
  }

}

export { CreateUserController }