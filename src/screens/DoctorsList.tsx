

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";




// import Icon from "react-native-vector-icons/MaterialIcons";
//  import HomeIcon from '../assets/icons/home.svg';
//  import { HomeIcon } from '../assets/icons';
  import { Hearttt} from '../assets/icons';
    import { Msg} from '../assets/icons';
     import { Phone} from '../assets/icons';
      import { Three} from '../assets/icons';
      import { Plus} from '../assets/icons';
       import { Home} from '../assets/icons';
    import { Account} from '../assets/icons';
     import { Map} from '../assets/icons';
      import { Hrt} from '../assets/icons';
      import { Magnify } from "../assets/icons";
        // import { Notification } from "../assets/icons";
      
      






type Doctor = {
  id: string;
  name: string;
  specialty: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
    //  image: "https://via.placeholder.com/80" 
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   

  },
  {
    id: "3",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
    //   image: "https://via.placeholder.com/80" 
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "5",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "6",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "7",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "8",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "9",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "10",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "11",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "12",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "13",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "14",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "15",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "16",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "17",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "18",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "19",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "20",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "21",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "22",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "23",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "24",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "25",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "26",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "27",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "28",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "29",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "30",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "31",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "32",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "33",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "34",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "35",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "36",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },  {
    id: "37",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "38",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "39",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "40",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "41",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "42",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "43",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "44",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "45",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "46",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "47",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "48",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "49",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "50",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "51",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "52",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "53",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "54",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: "55",
    name: "Dr Bogdan",
    specialty: "Cardiologist",
     image: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function DoctorsList() {
  const renderDoctor = ({ item }: { item: Doctor }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={{
         flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
      </View>
      <View style={styles.iconsRow}>
        <TouchableOpacity>
          {/* <Icon name="favorite-border" size={22} color="#009688" /> */}
           
           <Hearttt width={26} height={26} fill="#fff" />  
         
        </TouchableOpacity>

        <TouchableOpacity>
          {/* <Icon name="event" size={22} color="#009688" /> */}
            <Msg width={26} height={26} fill="#fff" />  
         
        </TouchableOpacity>

        <TouchableOpacity>
          {/* <Icon name="phone" size={22} color="#009688" /> */}
          <Phone width={26} height={26} fill="#fff" />   
         
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.hello}>Hello, John! 👋</Text>

        <Text style={styles.subText}>You have 2 appointments for today</Text>
      
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText}>Register as a Doctor</Text>
        </TouchableOpacity>


        <View style={styles.searchBar}>
          <Magnify width={20} height={20} fill="#009688" style={{ marginRight: 8 }} />

          <TextInput placeholder="Search doctors" placeholderTextColor="#000000ff"   style={{ flex: 1 }} />

            <Three width={26} height={26} fill="#009688" />   
         
        </View>



      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>ANAESTHETIST ON CALL</Text>

      {/* Doctor List */}
      <FlatList
      
        data={doctors}
        renderItem={renderDoctor}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />



{/* <FlatList
  data={Array.isArray(doctors) ? doctors : []}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => {
    if (!item || typeof item !== 'object') return null;
    return renderDoctor({ item });
  }}
/> */}

    

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
            <Account width={26} height={28} fill="#fff" />
  <Account width={26} height={28} fill="#fff" />
        <View style={styles.plusBtn}>
          <Plus width={26} height={26} fill="009688" /> 
        </View>
      <Account width={26} height={28} fill="#fff" />
  <Account width={26} height={28} fill="#fff" />
         
      </View> */}

{/* Bottom Navigation */}
<View style={styles.bottomNav}>
  <View style={styles.iconBtn}>
    <Home width={26} height={28} fill="#fff" />
  </View>

  <View style={styles.iconBtn}>
    <Account width={26} height={28} fill="#fff" />
  </View>

  {/* Floating Center Button */}
  <View style={styles.plusBtn}>
    <Plus width={26} height={26} fill="#009688" />
  </View>

  <View style={styles.iconBtn}>
    <Hrt width={26} height={28} fill="#fff" />
  </View>

  <View style={styles.iconBtn}>
    <Map width={26} height={28} fill="#fff" />
    
  </View>
</View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#009688",
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    
  },


  hello: { fontSize: 20, 
    fontWeight: "bold", 
    color: "#fff",
     textAlign: "center",
   
   },

  subText: { 
    fontSize: 14, 
    color: "#e0f2f1",
     marginBottom: 10,
      textAlign: "center"
     },

  registerBtn: {
    backgroundColor: "#fff",
    // alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: "center",

  },
  registerText: { color: "#F8A435",
     fontWeight: "600" },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    alignItems: "center"
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#009688",
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: "center",
    marginBottom:35
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 12
  },
  avatar: { width: 50,
     height: 50, borderRadius: 25,
      marginRight: 10 },
  name: { fontWeight: "bold", 
    fontSize: 16 },
  specialty: { fontSize: 12,
     color: "#757575" 
    },
  iconsRow: {
    flexDirection: "row",
    gap: 12
  },


  






  bottomNav: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 65,
  backgroundColor: "#009688",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingHorizontal: 10
},
iconBtn: {
  // backgroundColor: "#00796bff",
  backgroundColor: "#fff",
  padding: 10,
  borderRadius: 50,
  justifyContent: "center",
  alignItems: "center"
},
plusBtn: {
  backgroundColor: "#fff",
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  marginTop: -30,
  elevation: 6,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3
}







});
