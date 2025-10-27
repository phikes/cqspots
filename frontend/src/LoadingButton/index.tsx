import Spinner from "react-bootstrap/Spinner"
import Button, {type ButtonProps} from "react-bootstrap/Button"

interface Props extends ButtonProps {
  loading: boolean
}

export const LoadingButton = ({children, disabled, loading, ...props}: Props) => {
  return <Button disabled={disabled || loading} {...props}>
    {loading && <Spinner size="sm" />} {children}
  </Button>
}
