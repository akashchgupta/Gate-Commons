import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";

import styles from "./style";

const subject = [
  {
    id: 1,
    subjectName: "Database"
  },
  {
    id: 2,
    subjectName: "Operating System"
  },
  {
    id: 3,
    subjectName: "Computer Networks"
  },
  {
    id: 4,
    subjectName: "Data Structure"
  },
  {
    id: 5,
    subjectName: "Algorithms"
  },
  {
    id: 6,
    subjectName: "C Programming"
  },
  {
    id: 7,
    subjectName: "Computer Organization"
  },
  {
    id: 8,
    subjectName: "Theory of Computation"
  },
  {
    id: 9,
    subjectName: "Compiler Design"
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.matchSubject = this.matchSubject.bind(this);
  }

  componentDidMount() {}

  handleChangeText(text) {
    this.setState({ searchText: text });
  }

  matchSubject(text) {
    return item => item.subjectName.toLowerCase().includes(text.toLowerCase());
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.homeMainContent}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              autoCorrect={false}
              placeholder="Search for subject..."
              value={this.state.searchText}
              onChangeText={this.handleChangeText}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.subjectsContainer}
          >
            {subject
              .filter(this.matchSubject(this.state.searchText))
              .map(item => (
                <View key={item.id} style={styles.subjectCard}>
                  <TouchableOpacity>
                    <Text style={styles.subjectName}>{item.subjectName}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>
        <View style={styles.bottomTabContainer}>
          <TouchableOpacity style={styles.bottomTab}>
            <Ionicons name="ios-add" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab}>
            <Ionicons name="ios-bookmarks" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab}>
            <Ionicons name="ios-settings" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
