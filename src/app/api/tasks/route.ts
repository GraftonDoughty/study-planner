import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'tasks.json');

// Interface for Task validation
interface Task {
  id: number;
  title: string;
  dueDate: string;
  subject: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

export async function GET() {
  try {
    const fileData = await fs.readFile(DATA_PATH, 'utf8');
    const data = JSON.parse(fileData);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading tasks.json:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newTask: Partial<Task> = await request.json();
    
    // Read the existing data
    const fileData = await fs.readFile(DATA_PATH, 'utf8');
    const data = JSON.parse(fileData);
    
    // Generate a new ID (basic increment)
    const nextId = data.tasks.length > 0 ? Math.max(...data.tasks.map((t: Task) => t.id)) + 1 : 1;
    
    const taskToSave: Task = {
      id: nextId,
      title: newTask.title || 'Untitled Task',
      dueDate: newTask.dueDate || new Date().toISOString().split('T')[0],
      subject: newTask.subject || 'General',
      priority: newTask.priority || 'medium',
      completed: newTask.completed ?? false,
    };
    
    // Add to the list
    data.tasks.push(taskToSave);
    
    // Write back to the file
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
    
    return NextResponse.json(taskToSave, { status: 201 });
  } catch (error) {
    console.error('Error writing to tasks.json:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
