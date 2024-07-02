
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

type Detail = {
  type: string;
  description: string;
};

type TProps = {
  title: string;
  details: Detail[];
};

const ServiceCard = ({ title, details }: TProps) => (
  <Card className="p-4">
    <Badge variant="outline" className="text-[18px]">
      <strong>{title}</strong>
    </Badge>
    <ul>
      {details.map((detail, index) => (
        <li key={index}>
          <strong>{detail.type}:</strong> {detail.description}
        </li>
      ))}
    </ul>
  </Card>
);

export default ServiceCard;
