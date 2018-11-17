import React from 'react'
import { Home, HomeVM } from './home'

export class ScreenProvider {
    domainFactory

    constructor(domainFactory) {
        this.domainFactory = domainFactory
    }

    Home() {
        const vm = new HomeVM(this.domainFactory.Storage())
        return (
            <Home vm={vm} />
        )
    }

}