import React, { Fragment } from "react"
import { LinkProps, Link } from "react-router-dom"
import Panel from "../../ui/Panel"
import PageHeader from "../../ui/PageHeader"
import Card from "../../ui/Card"
import { Columns } from "react-flex-columns"
import Column from "react-flex-columns/build/Column"

const DataBaseHome = ({ match }) => {
    return (
        <Fragment>
            <PageHeader title="Database" useMaxWidth={false} />
            <Panel>
                <Columns gutterSIze={0.8}>
                    <Column flex>
                        <Card className="spacing">
                            <h1 className="heading-3">Cloud Storage</h1>
                            <div>
                                <Link to={`${match.url}/firestore`}>View</Link>
                            </div>
                        </Card>

                        <Card className="spacing">
                            <h1 className="heading-3">Realtime Database</h1>
                            <div>
                                <Link to={`${match.url}/realtime`}>View</Link>
                            </div>
                        </Card>
                    </Column>
                </Columns>
            </Panel>
        </Fragment>
    )
}


export default DataBaseHome