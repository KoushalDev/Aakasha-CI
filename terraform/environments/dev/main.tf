module "vpc" {
  source = "../../modules/vpc"

  vpc_name = "aakasha-dev-vpc"
  vpc_cidr = var.vpc_cidr

  availability_zones = var.availability_zones
  public_subnets     = var.public_subnets
  private_subnets    = var.private_subnets
}

module "eks" {
  source = "../../modules/eks"

  cluster_name    = "aakasha-dev"
  cluster_version = "1.33"

  vpc_id             = module.vpc.vpc_id
  private_subnet_ids = module.vpc.private_subnet_ids

  node_instance_types = ["t3.medium"]

  desired_nodes = 2
  min_nodes     = 1
  max_nodes     = 3
}
