import { Form } from "react-bootstrap";

function CategoryFilterComponent() {
  return (
    <>
    <span className="fw-bold">category</span>
    <Form>
        {Array.from({length: 5}).map((_,idx) => (
            <div key={idx}>
                <Form.Check type="checkbox" id={`check-api-${idx}`}>
                    <Form.Check.Input type="checkbox" isValid/>
                    <Form.Check.Label style={{cursor: "pointer"}}>category {idx}</Form.Check.Label>
                </Form.Check>
            </div>
        ))}
    </Form>
    </>
  )
}

export default CategoryFilterComponent
