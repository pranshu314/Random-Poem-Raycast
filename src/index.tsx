import { Detail } from "@raycast/api";
import { useFetch } from "@raycast/utils"

interface apiData {
  title: string;
  author: string;
  lines: Array<string>;
  linecount: string;
}

export default function Main() {

  const { isLoading, data, revalidate } = useFetch<apiData>("https://poetrydb.org/random")

  // console.log(data[0]?.lines)

  let lines = ``
  for (let line in data[0].lines) {
    lines += data[0].lines[line] + "\n\n"
  }
  console.log(lines)
  const markdown = `# ${data[0]?.title}
  ${lines}
`

  return (
    <Detail
      isLoading={isLoading}
      markdown={markdown}
      navigationTitle="Pikachu"
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.Label title="" text={``} />
          <Detail.Metadata.Label title="" text={``} />
          <Detail.Metadata.Label title="" text={``} />
          <Detail.Metadata.Label title="" text={``} />
          <Detail.Metadata.Label title="Author" text={`${data[0]?.author} `} />
          <Detail.Metadata.Label title="Title" text={`${data[0]?.title} `} />
          <Detail.Metadata.Label title="Linecount" text={`${data[0]?.linecount} `} />
        </Detail.Metadata>
      }
    />
  );
}
