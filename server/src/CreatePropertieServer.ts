interface Propertie {
  name: string
  description: string
  available?: boolean
}

export default class CreatePropertieServer {
  static create({ name, description, available = true }: Propertie) {
    console.log(name, description, available)
  }
}
