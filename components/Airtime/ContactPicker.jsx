import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Modal,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";

const ContactPicker = () => {
  const [contacts, setContacts] = useState([]);
  const [uniqueContacts, setUniqueContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // State to store the phone number

  useEffect(() => {
    const loadContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();

        // Filter out contacts with the same name
        const uniqueContacts = Array.from(
          new Set(data.map((contact) => contact.name))
        ).map((name) => {
          return data.find((contact) => contact.name === name);
        });

        // Sort contacts alphabetically by name
        uniqueContacts.sort((a, b) => a.name.localeCompare(b.name));

        setContacts(uniqueContacts);
      }
    };

    loadContacts();
  }, []);

  const openContactPicker = () => {
    setModalVisible(true);
  };

  const pickContact = (contact) => {
    setSelectedContact(contact);
    setModalVisible(false);
    // Set the phone number when a contact is selected
    setPhoneNumber(contact.phoneNumbers[0]?.number || "");
  };

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ paddingVertical: 20 }}>
          <FlatList
            style={{ gap: 12, display: "flex", flexDirection: "column" }}
            data={contacts}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => pickContact(item)}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    paddingTop: 12,
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#007aff",
                      borderRadius: 999,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      {item.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                  <Text style={{ marginLeft: 12, fontWeight: "300" }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>

      <View>
        <Text className="text-white font-medium">Phone Number</Text>
        <TextInput
          className="border-2 p-2 text-black bg-white"
          style={{ borderRadius: 8, height: 52 }}
          value={phoneNumber} // Use the phoneNumber state
          onChangeText={(text) => setPhoneNumber(text)} // Update phoneNumber when the text changes
        />
        <View className="flex items-end">
          <Text className="text-white font-medium " onPress={openContactPicker}>
            Choose Contact
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactPicker;
