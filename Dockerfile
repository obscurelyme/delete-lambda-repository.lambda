FROM amazon/aws-lambda-nodejs:20

COPY . ${LAMBDA_TASK_ROOT}

CMD ["dist/index.handler"]