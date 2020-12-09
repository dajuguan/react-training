import React, { Fragment, Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import PageHeader from "../../ui/PageHeader"
import Panel from "../../ui/Panel"
import { PageHeaderTabs, Tab } from "../../ui/PageHeaderTabs"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Data from "./Data"
import Rules from "./Rules"
import Indexes from "./Indexes"
const DatabaseLayout = ({ match, location }) => {
    return (
        <Fragment>
            {match.url === location.pathname && <Redirect to={`${match.url}/data`} />}
            <PageHeader title="Database" useMaxWidth={false}>
                <PageHeaderTabs>
                    <Tab to={`${match.url}/data`}>
                        Data
                    </Tab>
                    <Tab to={`${match.url}/rules`}>
                        Rules
                    </Tab>
                    <Tab to={`${match.url}/indexes`}>
                        Indexs
                    </Tab>
                </PageHeaderTabs>
            </PageHeader>

            <Panel>
                <TransitionGroup className="animated-cards">
                    <CSSTransition key={location.key} timeout={600} classNames="animated-card">
                        <Switch>
                            <Route path={`${match.path}/data`} component={Data} />
                            <Route path={`${match.path}/rules`} component={Rules} />
                            <Route path={`${match.path}/indexes`} component={Indexes} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Panel>
        </Fragment>
    )
}


export default DatabaseLayout