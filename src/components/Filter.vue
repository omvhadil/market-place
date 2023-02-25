<script setup></script>
<template>
  <div class="container-filter p-3 border rounded">
    <h5>Filter</h5>
    <div class="content-supplier mt-3">
      <h6>Suppliers Types</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          👑 Trade Assurance
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          💎 Ferfied Suppliers
        </label>
      </div>
    </div>
    <!-- ============== -->
    <div class="content-supplier mt-3">
      <h6>Product Types</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Ready to Ship
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Paid Samples
        </label>
      </div>
    </div>
    <!-- ============== -->
    <div class="content-supplier mt-3">
      <h6>Condition</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          New Stuff
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Second hand
        </label>
      </div>
    </div>
    <!-- ============== -->
    <div class="content-supplier mt-3">
      <h6>Min Orders</h6>
      <input
        type="range"
        class="form-range"
        min="0"
        max="5"
        step="0.5"
        id="customRange3"
      />
    </div>
    <!-- ============== -->
    <div class="content-supplier mt-3">
      <h6>Price</h6>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">💰</span>
        <input
          type="text"
          class="form-control"
          placeholder="100"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">💰</span>
        <input
          type="text"
          class="form-control"
          placeholder="6000"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
</template>
