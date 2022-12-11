import { Form } from "react-bootstrap";

function SortOptionsComponents() {
  return (
    <Form.Select aria-label="Default select example">
     <option>--</option>
    <option value="price_1">prix: le moin chère</option> 
    <option value="price_-1">prix: le plus chère</option>
    <option value="rating_-1">moyen de commantaire</option>
    <option value="name_1">ordre croissant</option>
    <option value="name_-1">ordre décroissant</option>
    </Form.Select>
  )
}

export default SortOptionsComponents
