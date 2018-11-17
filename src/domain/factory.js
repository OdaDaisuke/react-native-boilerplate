import { Storage } from './storage'

export class DomainFactory {
    storageClient

    constructor() {
        this.storageClient = new Storage()
    }

    Storage() {
        return this.storageClient
    }
}