import { ApiGatewayContract } from '@swarmion/serverless-contracts';

const pathParametersSchema = {
  type: 'object',
  properties: {
    trailId: { type: 'string' },
  },
  required: ['trailId'],
  additionalProperties: false,
} as const;

const outputSchema = {
  type: 'array',
} as const;

export const listEventsContract = new ApiGatewayContract({
  id: 'tests-listEvents',
  method: 'GET',
  path: '/trail/{trailId}',
  integrationType: 'restApi',
  authorizerType: 'aws_iam',
  pathParametersSchema,
  queryStringParametersSchema: undefined,
  headersSchema: undefined,
  bodySchema: undefined,
  outputSchema,
});
