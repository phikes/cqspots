const GMA_REGEX = /^[A-Z0-9]+\/[A-Z0-9]+-\d+/
const POTA_REGEX = /^[A-Z]{2}-\d{4}$/
const WWFF_REGEX = /^[A-Z]{2}FF-\d{4}$/

interface Props {
  reference: string
}

export const ReferenceLink = ({reference}: Props) => {
  if (GMA_REGEX.test(reference)) return <a className="btn btn-link btn-sm text-primary p-0" href={`https://www.cqgma.org/zinfo.php?ref=${reference}`} target="_blank" rel="noopener noreferrer">{reference}</a>
  if (POTA_REGEX.test(reference)) return <a className="btn btn-link btn-sm text-primary p-0" href={`https://pota.app/#/park/${reference}`} target="_blank" rel="noopener noreferrer">{reference}</a>
  if (WWFF_REGEX.test(reference)) return <form action="https://wwff.co/directory/" method="post">
      <input type="hidden" value={reference} name="refID" />
      <button className="btn btn-link btn-sm p-0" type="submit" formTarget="_blank">{reference}</button>
    </form>

  return reference
}
