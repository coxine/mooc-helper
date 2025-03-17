import { convert } from "html-to-text";

export default function Plaintext({ html }: { html: string }) {
  return <>{convert(html, { wordwrap: false })}</>;
}