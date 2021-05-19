# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [account-summary-component-factory](../../../main/factories)
- [account-transaction-list-component-factory](../../../main/factories)

### Graph
```mermaid
graph TD;
  wallet-component --> account-summary-component-factory
  wallet-component --> account-transaction-list-component-factory
  account-summary-component-factory --> account-summary-component
  account-transaction-list-component-factory --> account-transaction-list-component
  account-transaction-list-component --> account-transaction-component
  style wallet-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
