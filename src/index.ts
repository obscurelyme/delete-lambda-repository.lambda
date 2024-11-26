import { Context } from 'aws-lambda'
import { Octokit } from 'octokit'
import { env } from "node:process"

interface Payload {
  repositoryOwner: string
  repositoryName: string
}

interface Response {
  statusCode: number
  body: string
}

export async function handler(event: Payload, _: Context): Promise<Response> {
  const client = new Octokit({
    auth: env["GH_TOKEN"]
  });

  const response = await client.request(`DELETE /repos/${event.repositoryOwner}/${event.repositoryName}`, {
    owner: event.repositoryOwner,
    repo: event.repositoryName,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  console.log(event)

  return {
    statusCode: response.status,
    body: JSON.stringify(response.data)
  }
}