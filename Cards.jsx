import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';

export class Cards extends Component {
  state = {
    products: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      this.setState({ products: response.data, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { products, loading } = this.state;

    if (loading) {
      return <Text style={styles.loading}>Loading...</Text>;
    }

    return (
      <ScrollView style={styles.container}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default Cards;
