import { Storage } from './storage'

export class DomainFactory {
    storageClient: Storage

    constructor() {
        this.storageClient = new Storage()
    }

    Storage() {
        return this.storageClient
    }
}