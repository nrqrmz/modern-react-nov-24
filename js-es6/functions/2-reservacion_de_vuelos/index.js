export function arilineBooker(airline) {
  // tu codigo aqui
  const passengers = []

  const listPassengers = () => passengers

  const registerPassenger = (name, flightNumber) => {
    const passengerNames = passengers.map(p => p.name)
    if (passengerNames.includes(name)) {
      return `Pasajero ${name} ya registrado en el vuelo ${flightNumber} de ${airline}`
    } else {
      passengers.push({name, flightNumber, checkIn: false})

      return `Pasajero ${name} registrado en el vuelo ${flightNumber} de ${airline}`
    }
  }

  const checkIn = (name, flightNumber) => {
    let passengerCheckedIn = ""

    passengers.forEach((passenger) => {
      if (passenger.name === name && passenger.flightNumber === flightNumber && !passenger.checkIn) {
        passenger.checkIn = true
        passengerCheckedIn = 'checked in'
      } else if (passenger.name === name && passenger.flightNumber === flightNumber) {
        passengerCheckedIn = 'already checked in'
      } else if (passenger.name !== name || passenger.flightNumber !== flightNumber) {
        passengerCheckedIn = 'not registered'
      }
    })

    return passengerCheckedIn === 'checked in'
      ? `CheckIn realizado para el pasajero ${name} en el vuelo ${flightNumber} de ${airline}`
      : passengerCheckedIn === 'already checked in'
        ? `Pasajero ${name} ya realizo checkIn`
        : `Pasajero ${name} no registrado en el vuelo ${flightNumber} de ${airline}`
  }

  const delerePassenger = (name, flightNumber) => {
    let passengerIndex
    for (let i = 0; i < passengers.length; i++) {
      if (passengers[i].name === name && passengers[i].flightNumber === flightNumber) {
        passengerIndex = i
      }
    }

    if (passengerIndex > -1 && passengers[passengerIndex].checkIn) {
      return `Pasajero ${name} ya realizo checkIn`
    } else if (passengerIndex > -1) {
      passengers.splice(passengerIndex, 1)
      return `Pasajero ${name} eliminado del vuelo ${flightNumber} de ${airline}`
    } else {
      return `Pasajero ${name} no registrado en el vuelo ${flightNumber} de ${airline}`
    }
  }

  return {
    airline,
    listPassengers,
    registerPassenger,
    checkIn,
    delerePassenger
  }
}
