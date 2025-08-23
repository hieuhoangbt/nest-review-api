import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String, { name: 'register' })
  async register(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<string> {
    await this.authService.register({ username, password });
    return 'Register success';
  }

  @Mutation(() => String, { name: 'login' })
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<string> {
    const result = await this.authService.login({ username, password });
    return result.accessToken;
  }
}
