import { rest } from 'msw';

export const handlers = [
  rest.get('/api/v1/healthcheck', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'msw is working',
      })
    );
  }),
];
