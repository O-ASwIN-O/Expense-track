const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 4000;
const MONGO_URI = 'mongodb+srv://aswinm23aid:Expense@cluster0.sktxleo.mongodb.net/expensetrace?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors())
app.use(express.json()); 
const expenseSchema = new mongoose.Schema({
    title: String,
    amount: Number
});
const Expense = mongoose.model('Expense', expenseSchema);

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));

app.post('/Expense', async (req, res) => {
    console.log('Received body:', req.body); 
    const { title, amount } = req.body;

    if (!title || !amount) {
        return res.status(400).json({ error: 'Title and amount are required' });
    }

    try {
        const newExpense = await Expense.create({ title, amount });
        res.status(201).json({ message: 'Expense created', data: newExpense });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/Expense', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching expenses' });
    }
});

app.delete('/Expense/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const deletedExpense  = await Expense.findByIdAndDelete(id);

        if(!deletedExpense){
            return res.status(404).json({error : 'Expense not found'});
        }

        res.status(200).json({message: 'Exepense deleted'});
    }
    catch(error){
        res.status(500).json({error: 'failed to delete'})
    }
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Connected');
});
