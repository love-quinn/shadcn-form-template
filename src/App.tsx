import React, { useState } from 'react'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Search, PlusCircle, Sun, Moon } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "./components/ui/dialog"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`p-6 max-w-4xl mx-auto space-y-4 ${isDarkMode ? 'dark' : ''}`}>

      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Eventos</h1>
      <button onClick={toogleDarkMode} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
        {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-800"/>}
      </button>
      </div>
      
      <div className="flex items-center justify-between ">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do pedido"/>
          <Input name="id" placeholder="Nome do produto"/>
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2"/>
            Filtrar resultados
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2"/>
              Novo Evento
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo evento</DialogTitle>
              <DialogDescription>Criar um novo evento no sistema</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Evento</Label>
                <Input className="col-span-3" id="name"></Input>
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-3" id="price"></Input>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant={"outline"}>Cancelar</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Evento</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
              {Array.from({ length: 10}).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>8gdso012132{i}</TableCell>
                    <TableCell>Evento {i}</TableCell>
                    <TableCell>R$ 192,00</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App