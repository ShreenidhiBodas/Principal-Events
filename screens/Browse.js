import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const { width } = Dimensions.get("window");

class Browse extends Component {
  state = {
    active: "Products",
    categories: [],
    selected: ''

  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ["Products", "Inspirations", "Shop"];

    return (
      <Block>

        <Block flex={false} row center space="between" style={styles.header}>

          {/* <Text h1 bold>
            Event Menu
          </Text> */}

        </Block>

        {/* <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block> */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (

              // {if({category.name}==='Speaker')}
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate(category.selected, { category })}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="#348feb"
                  >
                    {
                      (category.name === "Speakers") ? <FontAwesome5 name={category.icon} size={24} color="white" /> : <FontAwesome name={category.icon} size={24} color="white" />
                    }
                    
                    {/* <Image source={category.image} /> */}
                  </Badge>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    color: 'white'
  }
});
