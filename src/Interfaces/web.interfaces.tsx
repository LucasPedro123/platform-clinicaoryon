

export interface IUser {
    email: string;
    name: string;
    password: string;
    phone: string;
    photoURL: string;
    userId: string;
    birthDate?: string;
    weeklyCalories?: number;
    firestoreId?: string | undefined;
}

export interface Food {
    _id?: any;
    id: number;
    name: string;
    portion: string;
    calories: number;
    firestoreId?: string; 
}


export interface FoodContextType {
    foodItems: Food[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    fetchFoodItems: () => void;
    updateFoodItem: (updatedFood: Food) => void;
    deleteFoodItem: (foodId: number) => void;
    addFoodItem: (food: Food) => void;
}

export interface UserContextType {
    users: IUser[];
    userImages: { [key: string]: string };
    fetchUsers: () => void;
    deleteUserAccount: (user: IUser) => Promise<void>;
    getUserWeeklyCalories?: (userId: string) => Promise<number>;
    getUserDailyCalories?:(userId: string) => Promise<{ date: string; calories: number; }[]>;
}

export interface IEmailSend {
    emailSend: IEmailProps[]
}

export interface IEmailProps {
    id: number;
    image: string;
    company: string;
    title: string;
    label: string;
    component: () => JSX.Element; // Sem parâmetros
}
export interface Notification {
    id: string;
    title: string;
    content: string;
    date: string;
}
export interface NotificationsContextProps {
    notifications: Notification[];
    loading: boolean;
    fetchNotifications: () => void;
    addNotification: (notification: Omit<Notification, 'id'>) => void;
    editNotification: (id: string, updatedNotification: Omit<Notification, 'id'>) => void;
    deleteNotification: (id: string) => void;
}