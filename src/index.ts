import { Context } from 'aws-lambda'

interface ExampleEvent {
  name: string
}

interface ExampleResponse {
  message: string
}

export async function handler(event: ExampleEvent, _: Context): Promise<ExampleResponse> {
  const name = event?.name || "NodeJS"

  return {
    message: `Hello, ${name}`
  }
}