import React from "react";
import { Typography, Card } from "antd";

const { Text } = Typography;

export default function Mail() {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card
          title="Citas, pedidos o dudas"
          bordered={false}
          style={{ width: "50vw", margin: "auto" }}
        >
          <Text code>planeacion@handelcomerciantes.com</Text>
        </Card>
      </div>
    </div>
  );
}
