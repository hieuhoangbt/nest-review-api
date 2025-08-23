<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Nest Review API

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Database & JWT Configuration

Dự án sử dụng biến môi trường để cấu hình database và JWT.  
Để cập nhật cấu hình, chỉnh sửa file `.env` ở thư mục gốc:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=nestuser
DB_PASSWORD=password123
DB_DATABASE=nest_review_api
JWT_SECRET=your_jwt_secret
```

- Thay đổi các giá trị cho phù hợp với môi trường của bạn.
- `JWT_SECRET` là chuỗi bí mật dùng để ký và xác thực JWT.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

Khi triển khai production, hãy đảm bảo cấu hình `.env` phù hợp và bảo mật biến `JWT_SECRET`.

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Hướng dẫn sử dụng GraphQL

Sau khi chạy ứng dụng, bạn có thể truy cập playground tại [http://localhost:3000/graphql](http://localhost:3000/graphql).

### Ví dụ Query lấy danh sách flashcard

```graphql
query {
  flashcards {
    id
    question
    answer
    userId
    user {
      id
      username
    }
  }
}
```

### Ví dụ Mutation đăng ký tài khoản

```graphql
mutation {
  register(username: "testuser", password: "strongpassword")
}
```

### Ví dụ Mutation đăng nhập

```graphql
mutation {
  login(username: "testuser", password: "strongpassword")
}
```

### Ví dụ Mutation tạo flashcard (yêu cầu đã đăng nhập)

```graphql
mutation {
  createFlashcard(
    question: "NestJS là gì?"
    answer: "Một framework NodeJS mạnh mẽ dựa trên TypeScript."
  ) {
    id
    question
    answer
    userId
    user {
      id
      username
    }
  }
}
```

> **Lưu ý:**  
> - Với mutation cần xác thực, bạn phải gửi JWT token ở phần HTTP Headers:
>   ```json
>   {
>     "Authorization": "Bearer <token>"
>   }
>   ```
> - Trường `userId` sẽ tự động lấy từ token, không cần truyền vào mutation `createFlashcard`.
> - Nếu muốn lấy thông tin user tạo flashcard, hãy query thêm trường `user { id username }`.

### Lưu ý về ràng buộc dữ liệu giữa Flashcard và User

- Khi tạo flashcard, hệ thống sẽ tự động gán user dựa trên thông tin lấy từ JWT token, đảm bảo mỗi flashcard luôn thuộc về một user hợp lệ.
- Trường `userId` trong bảng flashcard là bắt buộc và phải tham chiếu tới một user tồn tại trong bảng user.
- Nếu user bị xóa, các flashcard liên quan sẽ bị lỗi ràng buộc (foreign key) hoặc cần xử lý xóa cascade tuỳ cấu hình database.
- Khi truy vấn flashcard, trường `user` sẽ trả về thông tin user nếu và chỉ nếu `userId` hợp lệ và tồn tại trong bảng user.

> **Quan trọng:**  
> - Không nên tạo flashcard mà không có user hợp lệ.
> - Đảm bảo dữ liệu mẫu trong database luôn có user trước khi tạo flashcard liên kết.

## Flashcard API

### Update Flashcard (GraphQL)

```graphql
mutation {
  updateFlashcard(id: "FLASHCARD_ID", question: "New question", answer: "New answer") {
    id
    question
    answer
    user {
      id
      username
    }
  }
}
```

### Update Flashcard (REST API)

- **Endpoint:** `PATCH /flashcards/:id`
- **Body:**
  ```json
  {
    "question": "New question",
    "answer": "New answer"
  }
  ```
- **Response:**
  ```json
  {
    "id": "FLASHCARD_ID",
    "question": "New question",
    "answer": "New answer",
    "user": { ... }
  }
  ```
