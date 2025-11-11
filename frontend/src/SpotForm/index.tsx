import { Field, Formik, Form } from "formik"
import { useId, useMemo } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import BootstrapForm from "react-bootstrap/Form"
import { LoadingButton } from "@/LoadingButton"
import { useLoading } from "@/hooks/useLoading"
import { Icon } from "@/Icon"
import { FormMap } from "./FormMap"
import Markdown from "react-markdown"
import { boolean, number, object, string } from "yup"
import { graphql } from "relay-runtime"
import { useFragment } from "react-relay"
import type { SpotFormSpotFragment$key } from "./__generated__/SpotFormSpotFragment.graphql"

const fragment = graphql`
fragment SpotFormSpotFragment on Spot {
  childFriendly
  crowded
  description
  lonlat {
    x
    y
  }
  parking
  references
  rocky
  scenic
  sheltered
  sitting
  table
  trees
  wheelchairAccessible
}
`

const validationSchema = object({
  childFriendly: boolean().required(),
  crowded: boolean().required(),
  description: string(),
  long: number().required("Longitude is required"),
  lat: number().required("Latitude is required"),
  parking: boolean().required(),
  references: string(),
  rocky: boolean().required(),
  scenic: boolean().required(),
  sheltered: boolean().required(),
  sitting: boolean().required(),
  table: boolean().required(),
  trees: boolean().required(),
  wheelchairAccessible: boolean().required()
})

export type Values = {
  childFriendly: boolean,
  crowded: boolean,
  description: string,
  long: number | "",
  lat: number | ""
  parking: boolean,
  references: string
  rocky: boolean,
  scenic: boolean,
  sheltered: boolean,
  sitting: boolean,
  table: boolean,
  trees: boolean,
  wheelchairAccessible: boolean
}

interface Props {
  onSubmit: (values: Values & {lat: number, long: number}) => Promise<void>
  spotRef?: SpotFormSpotFragment$key | undefined | null
}

export const SpotForm = ({onSubmit, spotRef}: Props) => {
  const spot = useFragment(fragment, spotRef)
  const [loading, loadingOnSubmit] = useLoading(onSubmit)

  const initialValues: Values = useMemo(() => ({
    childFriendly: spot?.childFriendly ?? false,
    crowded: spot?.crowded ?? false,
    description: spot?.description ?? "",
    lat: spot?.lonlat.y ?? "",
    long: spot?.lonlat.x ?? "",
    parking: spot?.parking ?? false,
    references: spot?.references?.join(", ") ?? "",
    rocky: spot?.rocky ?? false,
    scenic: spot?.scenic ?? false,
    sheltered: spot?.sheltered ?? false,
    sitting: spot?.sitting ?? false,
    table: spot?.table ?? false,
    trees: spot?.trees ?? false,
    wheelchairAccessible: spot?.wheelchairAccessible ?? false
  }), [])

  const latId = useId()
  const longId = useId()
  const childFriendlyId = useId()
  const crowdedId = useId()
  const parkingId = useId()
  const referencesId = useId()
  const rockyId = useId()
  const scenicId = useId()
  const shelteredId = useId()
  const sittingId = useId()
  const tableId = useId()
  const treesId = useId()
  const wheelchairAccessibleId = useId()

  return <Formik initialValues={initialValues} onSubmit={loadingOnSubmit} validationSchema={validationSchema}>
    {
      ({errors, handleBlur, handleChange, values: {description}}) => <Form>
        <h2 className="h4">Location</h2>
        <p className="text-muted">Click on the map to place the spot</p>
        <div className="mb-3"><FormMap center={initialValues.lat && initialValues.long ? [initialValues.lat, initialValues.long] : [0, 0]} /></div>
        <Row>
          <Col>
            <BootstrapForm.Group className="mb-3" controlId={longId}>
              <BootstrapForm.Label>Longitude</BootstrapForm.Label>
              <Field as={BootstrapForm.Control} isInvalid={errors.long} name="long" type="number" min={-90} max={90} step="any" />
              <BootstrapForm.Control.Feedback type="invalid">{errors.long}</BootstrapForm.Control.Feedback>
            </BootstrapForm.Group>
          </Col>
          <Col>
            <BootstrapForm.Group className="mb-3" controlId={latId}>
              <BootstrapForm.Label>Latitude</BootstrapForm.Label>
              <Field as={BootstrapForm.Control} isInvalid={errors.lat} name="lat" type="number" min={-180} max={180} step="any" />
              <BootstrapForm.Control.Feedback type="invalid">{errors.lat}</BootstrapForm.Control.Feedback>
            </BootstrapForm.Group>
          </Col>
        </Row>
        <h2 className="h4">Details</h2>
        <Row className="mb-3">
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={childFriendlyId}
              label={
                <>
                  <Icon icon="childFriendly" /> Child friendly
                </>
              }
              name="childFriendly"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={crowdedId}
              label={
                <>
                  <Icon icon="crowded" /> Crowded
                </>
              }
              name="crowded"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={parkingId}
              label={
                <>
                  <Icon icon="parking" /> Parking
                </>
              }
              name="parking"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={rockyId}
              label={
                <>
                  <Icon icon="rocky" /> Rocky
                </>
              }
              name="rocky"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={scenicId}
              label={
                <>
                  <Icon icon="scenic" /> Scenic
                </>
              }
              name="scenic"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={shelteredId}
              label={
                <>
                  <Icon icon="sheltered" /> Sheltered
                </>
              }
              name="sheltered"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={sittingId}
              label={
                <>
                  <Icon icon="sitting" /> Sitting
                </>
              }
              name="sitting"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={tableId}
              label={
                <>
                  <Icon icon="table" /> Table
                </>
              }
              name="table"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={treesId}
              label={
                <>
                  <Icon icon="trees" /> Trees
                </>
              }
              name="trees"
              type="checkbox"
            />
          </Col>
          <Col>
            <Field
              as={BootstrapForm.Check}
              className="d-flex align-items-center gap-2 text-nowrap"
              id={wheelchairAccessibleId}
              label={
                <>
                  <Icon icon="wheelchairAccessible" /> Wheelchair accessible
                </>
              }
              name="wheelchairAccessible"
              type="checkbox"
            />
          </Col>
        </Row>
        <h3 className="h5">References</h3>
        <p className="text-muted">Add the POTA/SOTA/GMA/etc. references this spot covers, separated by commas</p>
        <BootstrapForm.Group className="mb-3" controlId={referencesId}>
          <Field as={BootstrapForm.Control} isInvalid={errors.references} name="references" />
          <BootstrapForm.Control.Feedback type="invalid">{errors.references}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>
        <h3 className="h5">Description</h3>
        <p className="text-muted">The description supports <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">markdown</a> for formatting</p>
        <BootstrapForm.Control
          as="textarea"
          className="mb-3"
          onBlur={handleBlur}
          onChange={handleChange}
          name="description"
          rows={10}
          value={description}
        />

        <h4 className="h6">Preview</h4>
        <div className="mb-3"><Markdown>{description}</Markdown></div>
        <LoadingButton loading={loading} type="submit">{spot ? "Update" : "Create"}</LoadingButton>
      </Form>
    }
  </Formik>
}
