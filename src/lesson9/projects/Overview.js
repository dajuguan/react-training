import React, { Fragment } from "react"

import Panel from "../ui/Panel"
import Card from "../ui/Card"
import { Column, Columns } from "react-flex-columns"

import PageHeader from "../ui/PageHeader"

const Overview = () => {
    return (
        <Fragment>
            <PageHeader style={{ height: '25em' }}>
                <h1 className="heading-2 horizontal-spacing">
                    <span className="plan"> Training Plan</span>
                </h1>
                <div>
                    <span className="add-app text-light-tint">
                        Add app
                    </span>
                </div>
            </PageHeader>
            <div style={{ marginTop: '-18em' }}>
                <Panel>
                    <h2 className="heading-3 text-light-tint">Develop</h2>

                </Panel>

                <Columns gutterSize={0.8}>
                    <Column flex>
                        <Card style={{ height: '20em' }}> Hosting</Card>
                    </Column>
                    <Column flex>
                        <Card style={{ height: '20em' }}> Realtime Database</Card>
                    </Column>
                </Columns>

            </div>
        </Fragment>
    )
}

export default Overview