import { Form} from "react-bootstrap";

function AttributesFilterComponent() {
  return (
    <>
    {[{couleur : ["rouge", "vert", "bleu", "noir"]},{ ram: ["bois", "pvc", "metal"]}].map(
        (item,idx) => (
            <div key={idx} className="mb-2">
    <Form.Label><b>{Object.keys(item)}</b></Form.Label>
    {item[Object.keys(item)].map((i, idx) => (
        <Form.Check key={idx}
            type="checkbox"
            id="default-checkbox"
            label={i}/>
    ))}
    </div>
        )
    )}
    
    </>
  )
}

export default AttributesFilterComponent
