package com.kushal.backend.service;

import com.kushal.backend.model.Product;
import com.kushal.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        Optional<Product> optionalproduct = productRepository.findById(id);
        return optionalproduct.orElse(null);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(
            int id,
            Product updatedproduct
    ) {
        Optional<Product> optionalproduct = productRepository.findById(id);
        if (optionalproduct.isPresent()) {
            Product product = optionalproduct.get();
            product.setTitle(updatedproduct.getTitle());
            product.setQuantity(updatedproduct.getQuantity());
            product.setPrice(updatedproduct.getPrice());
            return productRepository.save(product);
        }
        return null;
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
