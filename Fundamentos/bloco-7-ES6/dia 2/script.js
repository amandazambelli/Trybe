const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

    const customerInfo = (order) => {
    const receptor = order.order.delivery.deliveryPerson;
    const cliente = order.name;
    const tel = order.phoneNumber;
    const rua = order.address.street;
    const numero = order.address.number;
    const apartamento = order.address.apartment;

    console.log(`Olá ${receptor}, entrega para ${cliente}, Telefone: ${tel}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}.`);
  }
  
  customerInfo(order);

  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

  
  const orderModifier = (order) => {
    const cliente2 = order.name = 'Luiz Silva';
    const tipoPizzas = Object.keys(order.order.pizza);
    const outro = order.order.drinks.coke.type;
    const total = order.payment.total = 50;
    console.log(`Olá ${cliente2}, o total do seu pedido de ${tipoPizzas} e ${outro} é de R$ ${total},00.`);
  }
  
  orderModifier(order);