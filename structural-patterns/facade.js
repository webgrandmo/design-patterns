class Complaints {
    constructor() {
        this.complaints = [];
    }

    reply(complaints){}
    add(complaints) {
        this.complaints.push(complaints);
        return this.reply(complaints);
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Complaint id: ${id}. Customer: ${customer}. Complaint detail: ${details}`;
    }
}

class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Complaint id: ${id}. Customer: ${customer}. Complaint detail: ${details}`;
    }
}

class ComplaintRegister {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({id, customer, details});
    }
}

const registry = new ComplaintRegister();
console.log(registry.register('Anrew', 'service','Out of service'));
