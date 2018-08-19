import * as React from 'react'
import { Home, HomeVM } from './home'
import { DomainFactory } from '../../domain'

export class ScreenProvider {
    domainFactory: DomainFactory

    constructor(domainFactory: DomainFactory) {
        this.domainFactory = domainFactory
    }

    Home(): JSX.Element {
        const vm = new HomeVM(this.domainFactory.Storage())
        return (
            <Home vm={vm} />
        )
    }

}