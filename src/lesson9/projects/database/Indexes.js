import React from "react"
import Card from "../../ui/Card"

const Indexes = ({ match }) => {
    return <Card style={{ height: "20em" }}> Indexes ({match.params.databaseType})</Card>
}

export default Indexes